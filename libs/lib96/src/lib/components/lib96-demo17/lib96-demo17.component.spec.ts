import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo17Component } from './lib96-demo17.component';

describe('Lib96Demo17Component', () => {
  let component: Lib96Demo17Component;
  let fixture: ComponentFixture<Lib96Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
