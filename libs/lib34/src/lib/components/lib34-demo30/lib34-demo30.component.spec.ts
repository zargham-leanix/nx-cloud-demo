import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo30Component } from './lib34-demo30.component';

describe('Lib34Demo30Component', () => {
  let component: Lib34Demo30Component;
  let fixture: ComponentFixture<Lib34Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
