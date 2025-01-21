import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo30Component } from './lib89-demo30.component';

describe('Lib89Demo30Component', () => {
  let component: Lib89Demo30Component;
  let fixture: ComponentFixture<Lib89Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
