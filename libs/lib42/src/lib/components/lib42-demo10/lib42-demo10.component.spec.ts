import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo10Component } from './lib42-demo10.component';

describe('Lib42Demo10Component', () => {
  let component: Lib42Demo10Component;
  let fixture: ComponentFixture<Lib42Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
