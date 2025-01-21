import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo14Component } from './lib94-demo14.component';

describe('Lib94Demo14Component', () => {
  let component: Lib94Demo14Component;
  let fixture: ComponentFixture<Lib94Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
