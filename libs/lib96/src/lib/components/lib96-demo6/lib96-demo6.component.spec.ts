import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo6Component } from './lib96-demo6.component';

describe('Lib96Demo6Component', () => {
  let component: Lib96Demo6Component;
  let fixture: ComponentFixture<Lib96Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
