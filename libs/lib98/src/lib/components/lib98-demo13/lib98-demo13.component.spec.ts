import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo13Component } from './lib98-demo13.component';

describe('Lib98Demo13Component', () => {
  let component: Lib98Demo13Component;
  let fixture: ComponentFixture<Lib98Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
