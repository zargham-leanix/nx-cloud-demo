import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo44Component } from './lib94-demo44.component';

describe('Lib94Demo44Component', () => {
  let component: Lib94Demo44Component;
  let fixture: ComponentFixture<Lib94Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
