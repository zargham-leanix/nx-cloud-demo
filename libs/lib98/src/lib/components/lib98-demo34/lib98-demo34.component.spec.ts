import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo34Component } from './lib98-demo34.component';

describe('Lib98Demo34Component', () => {
  let component: Lib98Demo34Component;
  let fixture: ComponentFixture<Lib98Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
