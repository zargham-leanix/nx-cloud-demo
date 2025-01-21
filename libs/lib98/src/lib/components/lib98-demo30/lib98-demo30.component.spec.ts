import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo30Component } from './lib98-demo30.component';

describe('Lib98Demo30Component', () => {
  let component: Lib98Demo30Component;
  let fixture: ComponentFixture<Lib98Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
