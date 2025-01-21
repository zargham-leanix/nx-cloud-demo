import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo23Component } from './lib94-demo23.component';

describe('Lib94Demo23Component', () => {
  let component: Lib94Demo23Component;
  let fixture: ComponentFixture<Lib94Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
