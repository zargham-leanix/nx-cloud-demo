import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo43Component } from './lib98-demo43.component';

describe('Lib98Demo43Component', () => {
  let component: Lib98Demo43Component;
  let fixture: ComponentFixture<Lib98Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
