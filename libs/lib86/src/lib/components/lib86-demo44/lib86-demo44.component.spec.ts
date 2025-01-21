import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo44Component } from './lib86-demo44.component';

describe('Lib86Demo44Component', () => {
  let component: Lib86Demo44Component;
  let fixture: ComponentFixture<Lib86Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
