import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo10Component } from './lib94-demo10.component';

describe('Lib94Demo10Component', () => {
  let component: Lib94Demo10Component;
  let fixture: ComponentFixture<Lib94Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
