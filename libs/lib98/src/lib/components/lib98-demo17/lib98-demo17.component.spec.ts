import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo17Component } from './lib98-demo17.component';

describe('Lib98Demo17Component', () => {
  let component: Lib98Demo17Component;
  let fixture: ComponentFixture<Lib98Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
