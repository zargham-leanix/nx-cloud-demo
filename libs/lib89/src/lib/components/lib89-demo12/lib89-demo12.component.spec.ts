import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo12Component } from './lib89-demo12.component';

describe('Lib89Demo12Component', () => {
  let component: Lib89Demo12Component;
  let fixture: ComponentFixture<Lib89Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
