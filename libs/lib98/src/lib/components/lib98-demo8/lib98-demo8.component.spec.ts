import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo8Component } from './lib98-demo8.component';

describe('Lib98Demo8Component', () => {
  let component: Lib98Demo8Component;
  let fixture: ComponentFixture<Lib98Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
