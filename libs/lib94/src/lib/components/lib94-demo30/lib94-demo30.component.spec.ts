import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo30Component } from './lib94-demo30.component';

describe('Lib94Demo30Component', () => {
  let component: Lib94Demo30Component;
  let fixture: ComponentFixture<Lib94Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
