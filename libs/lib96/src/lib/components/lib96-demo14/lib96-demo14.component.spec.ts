import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo14Component } from './lib96-demo14.component';

describe('Lib96Demo14Component', () => {
  let component: Lib96Demo14Component;
  let fixture: ComponentFixture<Lib96Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
