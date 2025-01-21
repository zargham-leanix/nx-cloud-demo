import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo42Component } from './lib98-demo42.component';

describe('Lib98Demo42Component', () => {
  let component: Lib98Demo42Component;
  let fixture: ComponentFixture<Lib98Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
