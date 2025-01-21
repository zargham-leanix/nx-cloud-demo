import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo30Component } from './lib68-demo30.component';

describe('Lib68Demo30Component', () => {
  let component: Lib68Demo30Component;
  let fixture: ComponentFixture<Lib68Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
