import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo4Component } from './lib94-demo4.component';

describe('Lib94Demo4Component', () => {
  let component: Lib94Demo4Component;
  let fixture: ComponentFixture<Lib94Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
