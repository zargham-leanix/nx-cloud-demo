import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo13Component } from './lib42-demo13.component';

describe('Lib42Demo13Component', () => {
  let component: Lib42Demo13Component;
  let fixture: ComponentFixture<Lib42Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
