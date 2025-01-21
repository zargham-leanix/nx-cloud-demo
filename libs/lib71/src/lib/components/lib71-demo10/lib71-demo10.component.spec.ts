import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo10Component } from './lib71-demo10.component';

describe('Lib71Demo10Component', () => {
  let component: Lib71Demo10Component;
  let fixture: ComponentFixture<Lib71Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
