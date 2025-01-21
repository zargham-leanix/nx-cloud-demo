import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo23Component } from './lib98-demo23.component';

describe('Lib98Demo23Component', () => {
  let component: Lib98Demo23Component;
  let fixture: ComponentFixture<Lib98Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
