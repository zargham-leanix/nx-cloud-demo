import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo14Component } from './lib42-demo14.component';

describe('Lib42Demo14Component', () => {
  let component: Lib42Demo14Component;
  let fixture: ComponentFixture<Lib42Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
