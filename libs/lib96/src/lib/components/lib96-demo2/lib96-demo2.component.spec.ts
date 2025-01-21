import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo2Component } from './lib96-demo2.component';

describe('Lib96Demo2Component', () => {
  let component: Lib96Demo2Component;
  let fixture: ComponentFixture<Lib96Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
