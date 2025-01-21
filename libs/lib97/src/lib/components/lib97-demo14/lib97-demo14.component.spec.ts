import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo14Component } from './lib97-demo14.component';

describe('Lib97Demo14Component', () => {
  let component: Lib97Demo14Component;
  let fixture: ComponentFixture<Lib97Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
