import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo30Component } from './lib24-demo30.component';

describe('Lib24Demo30Component', () => {
  let component: Lib24Demo30Component;
  let fixture: ComponentFixture<Lib24Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
