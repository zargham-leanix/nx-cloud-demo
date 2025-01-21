import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo49Component } from './lib96-demo49.component';

describe('Lib96Demo49Component', () => {
  let component: Lib96Demo49Component;
  let fixture: ComponentFixture<Lib96Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
