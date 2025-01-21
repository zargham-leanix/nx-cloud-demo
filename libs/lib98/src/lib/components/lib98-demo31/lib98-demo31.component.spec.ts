import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo31Component } from './lib98-demo31.component';

describe('Lib98Demo31Component', () => {
  let component: Lib98Demo31Component;
  let fixture: ComponentFixture<Lib98Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
