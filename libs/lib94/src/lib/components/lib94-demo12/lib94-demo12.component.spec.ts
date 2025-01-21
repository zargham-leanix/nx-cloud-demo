import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo12Component } from './lib94-demo12.component';

describe('Lib94Demo12Component', () => {
  let component: Lib94Demo12Component;
  let fixture: ComponentFixture<Lib94Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
