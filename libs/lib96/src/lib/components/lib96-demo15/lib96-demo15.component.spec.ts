import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo15Component } from './lib96-demo15.component';

describe('Lib96Demo15Component', () => {
  let component: Lib96Demo15Component;
  let fixture: ComponentFixture<Lib96Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
