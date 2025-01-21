import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo44Component } from './lib74-demo44.component';

describe('Lib74Demo44Component', () => {
  let component: Lib74Demo44Component;
  let fixture: ComponentFixture<Lib74Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
