import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo25Component } from './lib98-demo25.component';

describe('Lib98Demo25Component', () => {
  let component: Lib98Demo25Component;
  let fixture: ComponentFixture<Lib98Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
