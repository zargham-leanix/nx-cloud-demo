import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo14Component } from './lib98-demo14.component';

describe('Lib98Demo14Component', () => {
  let component: Lib98Demo14Component;
  let fixture: ComponentFixture<Lib98Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
