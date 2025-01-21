import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo26Component } from './lib42-demo26.component';

describe('Lib42Demo26Component', () => {
  let component: Lib42Demo26Component;
  let fixture: ComponentFixture<Lib42Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
