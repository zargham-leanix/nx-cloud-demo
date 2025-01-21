import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo43Component } from './lib96-demo43.component';

describe('Lib96Demo43Component', () => {
  let component: Lib96Demo43Component;
  let fixture: ComponentFixture<Lib96Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
