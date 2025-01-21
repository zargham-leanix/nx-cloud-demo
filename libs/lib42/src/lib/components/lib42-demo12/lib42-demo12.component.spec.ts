import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo12Component } from './lib42-demo12.component';

describe('Lib42Demo12Component', () => {
  let component: Lib42Demo12Component;
  let fixture: ComponentFixture<Lib42Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
