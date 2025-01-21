import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo42Component } from './lib42-demo42.component';

describe('Lib42Demo42Component', () => {
  let component: Lib42Demo42Component;
  let fixture: ComponentFixture<Lib42Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
