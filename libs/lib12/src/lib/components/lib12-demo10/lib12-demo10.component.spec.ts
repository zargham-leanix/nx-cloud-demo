import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo10Component } from './lib12-demo10.component';

describe('Lib12Demo10Component', () => {
  let component: Lib12Demo10Component;
  let fixture: ComponentFixture<Lib12Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
