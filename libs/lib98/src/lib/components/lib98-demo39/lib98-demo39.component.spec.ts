import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo39Component } from './lib98-demo39.component';

describe('Lib98Demo39Component', () => {
  let component: Lib98Demo39Component;
  let fixture: ComponentFixture<Lib98Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
