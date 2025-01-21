import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo44Component } from './lib98-demo44.component';

describe('Lib98Demo44Component', () => {
  let component: Lib98Demo44Component;
  let fixture: ComponentFixture<Lib98Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
