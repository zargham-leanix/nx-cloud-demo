import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo13Component } from './lib74-demo13.component';

describe('Lib74Demo13Component', () => {
  let component: Lib74Demo13Component;
  let fixture: ComponentFixture<Lib74Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
