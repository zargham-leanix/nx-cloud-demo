import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo14Component } from './lib14-demo14.component';

describe('Lib14Demo14Component', () => {
  let component: Lib14Demo14Component;
  let fixture: ComponentFixture<Lib14Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
