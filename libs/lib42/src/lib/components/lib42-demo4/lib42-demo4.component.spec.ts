import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo4Component } from './lib42-demo4.component';

describe('Lib42Demo4Component', () => {
  let component: Lib42Demo4Component;
  let fixture: ComponentFixture<Lib42Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
