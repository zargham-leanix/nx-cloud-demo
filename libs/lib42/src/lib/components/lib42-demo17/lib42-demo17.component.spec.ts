import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo17Component } from './lib42-demo17.component';

describe('Lib42Demo17Component', () => {
  let component: Lib42Demo17Component;
  let fixture: ComponentFixture<Lib42Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
