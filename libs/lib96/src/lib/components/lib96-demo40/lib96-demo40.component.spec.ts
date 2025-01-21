import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo40Component } from './lib96-demo40.component';

describe('Lib96Demo40Component', () => {
  let component: Lib96Demo40Component;
  let fixture: ComponentFixture<Lib96Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
