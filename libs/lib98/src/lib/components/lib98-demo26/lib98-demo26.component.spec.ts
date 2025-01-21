import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo26Component } from './lib98-demo26.component';

describe('Lib98Demo26Component', () => {
  let component: Lib98Demo26Component;
  let fixture: ComponentFixture<Lib98Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
