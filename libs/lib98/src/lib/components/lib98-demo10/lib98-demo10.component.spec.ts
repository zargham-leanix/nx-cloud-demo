import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo10Component } from './lib98-demo10.component';

describe('Lib98Demo10Component', () => {
  let component: Lib98Demo10Component;
  let fixture: ComponentFixture<Lib98Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
