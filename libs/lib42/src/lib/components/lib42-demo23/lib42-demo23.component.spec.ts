import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo23Component } from './lib42-demo23.component';

describe('Lib42Demo23Component', () => {
  let component: Lib42Demo23Component;
  let fixture: ComponentFixture<Lib42Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
