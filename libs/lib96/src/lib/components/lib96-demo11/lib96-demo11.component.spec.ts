import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo11Component } from './lib96-demo11.component';

describe('Lib96Demo11Component', () => {
  let component: Lib96Demo11Component;
  let fixture: ComponentFixture<Lib96Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
