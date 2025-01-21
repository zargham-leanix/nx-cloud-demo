import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo34Component } from './lib96-demo34.component';

describe('Lib96Demo34Component', () => {
  let component: Lib96Demo34Component;
  let fixture: ComponentFixture<Lib96Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
