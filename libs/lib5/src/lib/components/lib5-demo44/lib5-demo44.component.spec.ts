import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo44Component } from './lib5-demo44.component';

describe('Lib5Demo44Component', () => {
  let component: Lib5Demo44Component;
  let fixture: ComponentFixture<Lib5Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
